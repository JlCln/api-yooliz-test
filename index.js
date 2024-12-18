const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3015;

app.use(cors());
app.use(express.json());

const vehicles = [
    {
        "id": 1,
        "brand": "Volkswagen",
        "model": "ID.3",
        "price": 43000,
        "engine": {
            "power_type": "électrique",
            "consumption": 15.5,
            "autonomy_km": 420,
            "horsepower": 204
        },
        "license_plate": "AB-123-CD",
        "car_picture": "https://www.breezcar.com/img-c/pageimg/4932_W750.jpg"
    },
    {
        "id": 2,
        "brand": "Peugeot",
        "model": "e-208",
        "price": 32000,
        "engine": {
            "power_type": "électrique",
            "consumption": 16.6,
            "autonomy_km": 340,
            "horsepower": 136
        },
        "license_plate": "EF-456-GH",
        "car_picture": "https://images.caradisiac.com/logos/9/2/5/4/279254/S8-la-nouvelle-peugeot-e-208-electrique-restylee-obligee-de-baisser-ses-prix-204703.jpg"
    },
    {
        "id": 3,
        "brand": "Renault",
        "model": "Clio",
        "price": 20000,
        "engine": {
            "power_type": "diesel",
            "consumption": 5.4,
            "autonomy_km": null,
            "horsepower": 90
        },
        "license_plate": "IJ-789-KL",
        "car_picture": "https://im.qccdn.fr/node/actualite-renault-clio-2019-premieres-impressions-67779/thumbnail_1000x600px-135746.jpg"
    },
    {
        "id": 4,
        "brand": "Hyundai",
        "model": "Kona Electric",
        "price": 39000,
        "engine": {
            "power_type": "électrique",
            "consumption": 14.7,
            "autonomy_km": 484,
            "horsepower": 204
        },
        "license_plate": "MN-012-OP",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/c51df517-d2d8-4007-9ad7-85476e25cd40/cbbd7aff-e091-417a-adf5-d25f444c0b9c.png"
    },
    {
        "id": 5,
        "brand": "BMW",
        "model": "X1",
        "price": 45000,
        "engine": {
            "power_type": "essence",
            "consumption": 7.2,
            "autonomy_km": null,
            "horsepower": 192
        },
        "license_plate": "UV-678-WX",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/f558e0c5-435e-4614-b001-472d9759557d/846677fe-3926-4972-bd05-e532c1f54942.png"
    },
    {
        "id": 6,
        "brand": "Tesla",
        "model": "Model 3",
        "price": 50000,
        "engine": {
            "power_type": "électrique",
            "consumption": 14.0,
            "autonomy_km": 491,
            "horsepower": 283
        },
        "license_plate": "YZ-901-AB",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/fd409174-819b-4600-838d-a50e179d0a7e/4e368649-25dc-4f0d-b4f2-3c6d35bf7cdd.png"
    },
    {
        "id": 7,
        "brand": "Audi",
        "model": "Q7",
        "price": 70000,
        "engine": {
            "power_type": "essence",
            "consumption": 9.1,
            "autonomy_km": null,
            "horsepower": 248
        },
        "license_plate": "CD-234-EF",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/66c4dadf-0789-4891-ab2d-66e7c5915dc4/0fb7c028-65e9-45e9-825b-69ad5845d692.png"
    },
    {
        "id": 8,
        "brand": "Kia",
        "model": "EV6",
        "price": 45000,
        "engine": {
            "power_type": "électrique",
            "consumption": 16.5,
            "autonomy_km": 528,
            "horsepower": 229
        },
        "license_plate": "GH-567-IJ",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/bf76186d-39e6-4650-9c31-bd07f18cd6a9/3211e331-bada-4ba3-90a0-49e9ac410103.png"
    },
    {
        "id": 9,
        "brand": "Ford",
        "model": "Mustang Mach-E",
        "price": 62000,
        "engine": {
            "power_type": "électrique",
            "consumption": 18.0,
            "autonomy_km": 490,
            "horsepower": 351
        },
        "license_plate": "KL-890-MN",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/ffd3df74-c4e4-45a0-8358-3af559382fa3/50c7ba84-a416-4dcd-be3e-9679bce87f02.png"
    },
    {
        "id": 10,
        "brand": "Peugeot",
        "model": "208",
        "price": 21000,
        "engine": {
            "power_type": "diesel",
            "consumption": 5.9,
            "autonomy_km": null,
            "horsepower": 100
        },
        "license_plate": "NO-123-PQ",
        "car_picture": "https://www.europcar-atlantique.fr/upload/images/Categories/Citadine/Eco5Portes.jpg?width=750"
    },
    {
        "id": 11,
        "brand": "Volkswagen",
        "model": "Golf",
        "price": 25000,
        "engine": {
            "power_type": "essence",
            "consumption": 6.5,
            "autonomy_km": null,
            "horsepower": 147
        },
        "license_plate": "RS-456-TU",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/5e20d4cf-e46d-4c12-8a62-5f4ee89aefa8/9489b189-2ef2-4e1f-a34f-7c23978113bd.png"
    },
    {
        "id": 12,
        "brand": "Volkswagen",
        "model": "e-Golf",
        "price": 37000,
        "engine": {
            "power_type": "électrique",
            "consumption": 13.0,
            "autonomy_km": 300,
            "horsepower": 136
        },
        "license_plate": "VW-789-XY",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/c178ee74-6148-40a7-ac50-e4e926f86413/bd23fbdc-e518-4a52-acec-f62de79d8c50.png"
    },
    {
        "id": 13,
        "brand": "Renault",
        "model": "Megane",
        "price": 24000,
        "engine": {
            "power_type": "diesel",
            "consumption": 6.3,
            "autonomy_km": null,
            "horsepower": 140
        },
        "license_plate": "ZA-345-BC",
        "car_picture": "https://leseco.ma/wp-content/uploads/2021/01/Renault-Megane-1.jpg"
    },
    {
        "id": 14,
        "brand": "Renault",
        "model": "Megane E-Tech",
        "price": 36000,
        "engine": {
            "power_type": "électrique",
            "consumption": 15.8,
            "autonomy_km": 470,
            "horsepower": 218
        },
        "license_plate": "DE-678-FG",
        "car_picture": "https://images.ctfassets.net/g9q6qxi3m2zj/3mO0Ob2Dzp24k6o0cKuqrO/af880978cb75633ff62eb4c2ea62cec0/MeganeEtech_1.png"
    },
    {
        "id": 15,
        "brand": "Hyundai",
        "model": "Ioniq 5",
        "price": 45000,
        "engine": {
            "power_type": "électrique",
            "consumption": 17.0,
            "autonomy_km": 480,
            "horsepower": 225
        },
        "license_plate": "HI-901-JK",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/f2927772-93e5-4376-acd1-a4d23128d3f6/8300e077-edd2-480e-a569-a775ec2f847e.png"
    },
    {
        "id": 16,
        "brand": "Hyundai",
        "model": "Ioniq",
        "price": 23000,
        "engine": {
            "power_type": "essence",
            "consumption": 4.7,
            "autonomy_km": null,
            "horsepower": 141
        },
        "license_plate": "LM-234-NO",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/9b813312-1121-4080-957e-e7115e0649b2/9bcd1202-4cb3-4274-8bcf-362814d534dc.png"
    },
    {
        "id": 17,
        "brand": "BMW",
        "model": "i3",
        "price": 40000,
        "engine": {
            "power_type": "électrique",
            "consumption": 14.3,
            "autonomy_km": 300,
            "horsepower": 170
        },
        "license_plate": "PQ-567-RS",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/bc5d4734-5bf0-4fda-acf3-265023f70310/bcea62da-664e-47ba-8b0a-fe618ea07a47.png"
    },
    {
        "id": 18,
        "brand": "BMW",
        "model": "3 Series",
        "price": 42000,
        "engine": {
            "power_type": "essence",
            "consumption": 6.8,
            "autonomy_km": null,
            "horsepower": 184
        },
        "license_plate": "TU-890-VW",
        "car_picture": "https://carimages.d2cmedia.ca/newcars/cb6762567152300/BMW/3%20Series/2024/MjkxNDg1Xk1lZGlhIEdhbGxlcnk/3RxKSeC2FJSwjlgTgX3gcCUy4h_BulsPC7pjodvLqgqsHM4oRs6QCtskxpw2Z88LOiJ02IEoSVitJ7fdeJpoOsXGMAWNZGqvmoDDx01gUKUAi5i2OpGuzzxfYOOTIk5LeUISeZkj_dVESKceqdgudZ4jSqdmvKcvtRcNEU2F62dE5JbYZlMXDc8ff4zyCiWd/cc_2024BMC220019_01_1280_668.png"
    },
    {
        "id": 19,
        "brand": "Kia",
        "model": "Soul EV",
        "price": 32000,
        "engine": {
            "power_type": "électrique",
            "consumption": 18.0,
            "autonomy_km": 450,
            "horsepower": 201
        },
        "license_plate": "XY-123-ZA",
        "car_picture": "https://platform.cstatic-images.com/in/v2/stock_photos/9703ebaa-6b81-4178-9285-bf02a1ecc5c6/53328f01-301f-4e21-a3d8-8d8b9d786286.png"
    },
    {
        "id": 20,
        "brand": "Nissan",
        "model": "Qashqai",
        "price": 29000,
        "engine": {
            "power_type": "essence",
            "consumption": 5.5,
            "autonomy_km": null,
            "horsepower": 158
        },
        "license_plate": "BC-456-DE",
        "car_picture": "https://www-europe.nissan-cdn.net/content/dam/Nissan/nissan_europe/Configurator/Qashqai-my24/configurator-webp/QQMC-ICE-Tekna.webp"
    }
];

app.get('/', (req, res) => {
    res.send('API Eco Compare');
});

app.get('/api/vehicles/:id', (req, res) => {
    try {
        const vehicle = vehicles.find(vehicle => vehicle.id === Number.parseInt(req.params.id));
        if (vehicle) {
            res.json(vehicle);
        } else {
            res.status(404).send("Vehicle not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.get('/api/vehicles', (req, res) => {
    try {
        res.json(vehicles);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error");
    }
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});
