"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCouserService_1 = __importDefault(require("./CreateCouserService"));
function createCourse(request, response) {
    CreateCouserService_1.default.execute("NodeJS", 10, "Guilherme");
}
exports.createCourse = createCourse;
