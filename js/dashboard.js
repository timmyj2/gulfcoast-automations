document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.day-tab');
  const panels = document.querySelectorAll('.route-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const day = tab.dataset.day;

      tabs.forEach((t) => t.classList.toggle('active', t === tab));
      panels.forEach((panel) => panel.classList.toggle('active', panel.id === `day-${day}`));
    });
  });
});
