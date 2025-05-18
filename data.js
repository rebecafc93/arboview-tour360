var APP_DATA = {
  "scenes": [
    {
      "id": "0-foto-1",
      "name": "Foto 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.120471012446984,
          "pitch": 0.029862117185496473,
          "rotation": 0,
          "target": "1-foto-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3345443101767671,
          "pitch": -0.15581250706834027,
          "title": "Árvore 1",
          "text": "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
        }
      ]
    },
    {
      "id": "1-foto-2",
      "name": "Foto 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.2186717867667909,
        "pitch": -0.01208601191618719,
        "fov": 1.2733156773635639
      },
      "linkHotspots": [
        {
          "yaw": 2.5680892396221413,
          "pitch": 0.1045649789267209,
          "rotation": 0,
          "target": "0-foto-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.148174756921188,
          "pitch": -0.15751551662489938,
          "title": "árvore 1",
          "text": "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
        },
        {
          "yaw": -0.05293091730289845,
          "pitch": -0.1619936462402336,
          "title": "árvore 2",
          "text": "texto texto texto texto texto texto texto texto texto texto texto texto texto texto texto"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
