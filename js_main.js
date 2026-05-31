const charts = [
  ['vis1', 'specs/spec_01_recovery_line.json'],
  ['vis2', 'specs/spec_02_arrivals_departures_area.json'],
  ['vis3', 'specs/spec_03_spend_lollipop.json'],
  ['vis4', 'specs/spec_04_seasonality_heatmap.json'],
  ['vis5', 'specs/spec_05_airport_bubble_map.json'],
  ['vis6', 'specs/spec_06_airport_mix_range.json'],
  ['vis7', 'specs/spec_07_trips_vs_spend_bubble.json'],
  ['vis8', 'specs/spec_08_source_country_grouped_bar.json'],
  ['vis9', 'specs/spec_09_state_stay_bar.json'],
  ['vis10', 'specs/spec_10_victoria_sources_treemap.json'],
  ['vis11', 'specs/spec_11_source_recovery_dot.json'],
  ['vis12', 'specs/spec_12_state_change_slope.json']
];

for (const [id, specPath] of charts) {
  vegaEmbed('#' + id, specPath, { actions: false, renderer: 'svg' }).catch(error => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = `<p style="color:#8a1c1c;background:#ffe2df;padding:12px;border-radius:12px">Chart failed to load. Check ${specPath}.</p>`;
    }
    console.error(id, error);
  });
}
