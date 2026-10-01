const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(id, focus = false) {
  const selected = tabs.find(tab => tab.dataset.tab === id) || tabs[0];
  for (const tab of tabs) {
    const active = tab === selected;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.dataset.tab).hidden = !active;
  }
  if (focus) selected.focus();
  history.replaceState(null, '', '#' + selected.dataset.tab);
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(tab.dataset.tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectTab(tabs[next].dataset.tab, true); }
  });
});
selectTab(location.hash.slice(1));
window.addEventListener('hashchange', () => selectTab(location.hash.slice(1)));
