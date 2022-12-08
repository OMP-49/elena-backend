const UMA_BOX = [-72.5381, 42.375, -72.5168, 42.398];

const PEDESTRAIN_HIGHWAY = [
    "pedestrian",
    "residential",
    "service",
    "footway",
    "crossing",
    "path",
    "sidewalk",
    "road",
    "tertiary",
    "secondary",
    "living_street",
    "steps",
    "track",
    "oppsite_track",
];

export const WALK_settings = {
    bbox: UMA_BOX,
    highways: PEDESTRAIN_HIGHWAY,
    timeout: 1000000000,
    maxContentLength: 2500000000,
};
