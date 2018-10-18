"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const PORT = process.env.PORT || 8081;
app_1.default.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
app_1.default.get('/', (req, res) => {
    res.json({
        note: 'Please use the REST API.'
    });
});
app_1.default.get('/users', (req, res) => {
    res.json({
        users: [
            { id: 1,
                name: 'Socrates',
                score: 1.5,
                balance: 22.26,
                currency: 'USD',
                history: [{
                        date: '2018-10-22',
                        transaction: -10.5
                    }]
            },
            { id: 2,
                name: 'Plato',
                score: 1.7,
                balance: 1210.03,
                currency: 'NIS',
                history: [{
                        date: '2012-02-01',
                        transaction: 120.67
                    }]
            },
        ]
    });
});
//# sourceMappingURL=server.js.map