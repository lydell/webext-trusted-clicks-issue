window.addEventListener(
  "keydown",
  event => {
    if (!event.isTrusted) {
      return;
    }

    const num = Number(event.key);
    if (Number.isNaN(num)) {
      return;
    }

    const element = document.querySelectorAll("a, button")[num - 1];
    if (element == null) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    const inTab = event.ctrlKey || event.metaKey;
    element.dispatchEvent(
      new MouseEvent("click", {
        ctrlKey: inTab,
        metaKey: inTab
      })
    );
  },
  true
);
