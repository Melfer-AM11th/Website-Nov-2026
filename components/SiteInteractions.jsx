"use client";

import { useEffect } from "react";

export default function SiteInteractions() {
  useEffect(() => {
    const cleanups = [];
    const listen = (target, event, handler, options) => {
      target.addEventListener(event, handler, options);
      cleanups.push(() => target.removeEventListener(event, handler, options));
    };
    const dialogs = [...document.querySelectorAll("dialog")];

    listen(document, "click", (event) => {
      const openButton = event.target.closest("[data-open]");
      if (openButton) {
        document.getElementById(openButton.dataset.open).showModal();
        return;
      }
      const closeButton = event.target.closest(".dlg-x,[data-close]");
      const dialog = closeButton?.closest("dialog");
      if (dialog) dialog.close();
    });
    dialogs.forEach((dialog) => {
      listen(dialog, "click", (event) => {
        if (event.target === dialog) dialog.close();
      });
    });

    const header = document.querySelector("header");
    const wasScrolled = header.classList.contains("scrolled");
    const updateHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
    };
    listen(window, "scroll", updateHeader, { passive: true });
    updateHeader();
    cleanups.push(() => header.classList.toggle("scrolled", wasScrolled));

    const menuButton = document.querySelector(".menu-btn");
    const mobileNav = document.getElementById("mnav");
    const wasMenuOpen = mobileNav.classList.contains("open");
    const previousExpanded = menuButton.getAttribute("aria-expanded");
    listen(menuButton, "click", () => {
      const open = mobileNav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    listen(mobileNav, "click", (event) => {
      if (!event.target.closest("a")) return;
      mobileNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
    cleanups.push(() => {
      mobileNav.classList.toggle("open", wasMenuOpen);
      if (previousExpanded === null) menuButton.removeAttribute("aria-expanded");
      else menuButton.setAttribute("aria-expanded", previousExpanded);
    });

    const formatTime = (timeZone) =>
      new Intl.DateTimeFormat("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone,
      });
    const dubaiFormatter = formatTime("Asia/Dubai");
    const manilaFormatter = formatTime("Asia/Manila");
    const dubaiClock = document.getElementById("t-dxb");
    const manilaClock = document.getElementById("t-mnl");
    const previousDubaiTime = dubaiClock.textContent;
    const previousManilaTime = manilaClock.textContent;
    const updateClocks = () => {
      const now = new Date();
      dubaiClock.textContent = dubaiFormatter.format(now);
      manilaClock.textContent = manilaFormatter.format(now);
    };
    updateClocks();
    const clockInterval = window.setInterval(updateClocks, 20000);
    cleanups.push(() => {
      window.clearInterval(clockInterval);
      dubaiClock.textContent = previousDubaiTime;
      manilaClock.textContent = previousManilaTime;
    });

    // Keep the original serif Pi cursor, its trail and its mouse-only behavior.
    if (window.matchMedia("(hover:hover) and (pointer:fine)").matches) {
      const root = document.documentElement;
      const cursor = document.getElementById("am-cursor");
      const trail = document.getElementById("am-trail");
      const originalPositions = [cursor, trail].map((element) => ({
        element,
        parent: element.parentNode,
        nextSibling: element.nextSibling,
        transform: element.style.transform,
      }));
      const cursorClasses = ["am-cursor-on", "am-visible", "am-text"];
      const previousClasses = cursorClasses.map((name) => root.classList.contains(name));
      const wasHovering = cursor.classList.contains("hover");
      root.classList.add("am-cursor-on");

      let x = -99;
      let y = -99;
      let trailX = -99;
      let trailY = -99;
      let frame = 0;
      const position = (element, a, b) => {
        element.style.transform = `translate(${a - 2}px,${b - 1}px)`;
      };
      const animateTrail = () => {
        trailX += (x - trailX) * 0.28;
        trailY += (y - trailY) * 0.28;
        position(trail, trailX, trailY);
        frame = Math.abs(x - trailX) + Math.abs(y - trailY) > 0.3
          ? window.requestAnimationFrame(animateTrail)
          : 0;
      };
      listen(window, "mousemove", (event) => {
        x = event.clientX;
        y = event.clientY;
        position(cursor, x, y);
        root.classList.add("am-visible");
        if (!frame) frame = window.requestAnimationFrame(animateTrail);
      }, { passive: true });
      listen(document, "mouseover", (event) => {
        cursor.classList.toggle("hover", !!event.target.closest("a,button,[data-open],summary,select"));
        root.classList.toggle("am-text", !!event.target.closest("input:not([type=checkbox]):not([type=radio]):not([type=submit]),textarea"));
      });
      listen(document, "mouseleave", () => root.classList.remove("am-visible"));
      listen(document, "mouseenter", () => {
        if (x > -99) root.classList.add("am-visible");
      });

      // A modal is in the browser's top layer; the cursor must move into it.
      let openDialogs = dialogs.filter((dialog) => dialog.open);
      const moveCursor = () => {
        const host = openDialogs.at(-1) || document.body;
        if (cursor.parentNode !== host) host.appendChild(cursor);
        if (trail.parentNode !== host) host.appendChild(trail);
      };
      const observers = dialogs.map((dialog) => {
        const observer = new MutationObserver(() => {
          openDialogs = openDialogs.filter((openDialog) => openDialog.open);
          if (dialog.open && !openDialogs.includes(dialog)) openDialogs.push(dialog);
          moveCursor();
        });
        observer.observe(dialog, { attributes: true, attributeFilter: ["open"] });
        return observer;
      });
      moveCursor();

      cleanups.push(() => {
        observers.forEach((observer) => observer.disconnect());
        if (frame) window.cancelAnimationFrame(frame);
        cursorClasses.forEach((name, index) => root.classList.toggle(name, previousClasses[index]));
        cursor.classList.toggle("hover", wasHovering);
        // Restore the trail first because it can be the cursor's original anchor.
        [...originalPositions].reverse().forEach(({ element, parent, nextSibling, transform }) => {
          parent.insertBefore(element, nextSibling?.parentNode === parent ? nextSibling : null);
          element.style.transform = transform;
        });
      });
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
