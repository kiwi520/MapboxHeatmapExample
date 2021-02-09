# MapboxHeatmapExample

This repository is a minimum example to show how `react-native-mapbox-gl/maps` crashes on iOS when there is a `HeatmapLayer` added.

1. Install dependencies
2. Install pods (`npx pod-install`)
3. In App.tsx, paste in a Mapbox access token inside `MapboxGL.setAccessToken()`

The app will crash on iOS >75% of the time. I have committed an error log in this repository:

[Crash Report](https://raw.githubusercontent.com/zholmes1/MapboxHeatmapExample/master/MapboxHeatmapExample_2021-02-08-190724_Zachs-MacBook-Pro.crash)

terminating with uncaught exception of type std::runtime_error
