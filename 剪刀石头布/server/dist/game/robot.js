"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
let nextRobotId = 0;
/** 没人陪你玩的时候，机器人上马 */
class Robot extends client_1.Client {
    constructor() {
        super({ id: `robot-${++nextRobotId}` });
        this.listeners = [];
        this.handlers = [];
        this.playing = false;
        this.user = {
            uid: this.id,
            uname: this.id,
            uavatar: 'http://www.scoutiegirl.com/wp-content/uploads/2015/06/Blue-Robot.png'
        };
        this.connect();
        this.simulate();
    }
    simulate() {
        this.handle('start', () => this.play());
        this.handle('result', () => this.stop());
        this.handle('leave', () => this.send('leave', null));
        this.send('join', null);
    }
    play() {
        this.playing = true;
        const randomTime = () => Math.floor(100 + Math.random() * 4000);
        const randomChoice = () => {
            if (!this.playing)
                return;
            this.send("choice", {
                choice: Math.floor(Math.random() * 10000) % 3 + 1
            });
            setTimeout(randomChoice, randomTime());
        };
        setTimeout(randomChoice, 10);
    }
    stop() {
        this.playing = false;
    }
    send(message, packet) {
        console.log(`[robot] ${message}`, packet);
        this.listeners.forEach(([listenMessage, handle]) => {
            console.log(`${listenMessage} <=> ${message}`);
            if (listenMessage == message) {
                console.log(message, handle);
                handle(packet);
            }
        });
    }
    handle(message, handle) {
        this.handlers.push([message, handle]);
    }
    on(message, handle) {
        console.log('add listener: ', message, handle);
        this.listeners.push([message, handle]);
    }
    emit(message, packet) {
        this.handlers.forEach(([handleMessage, handle]) => {
            if (handleMessage == message)
                handle(packet);
        });
    }
}
exports.Robot = Robot;
//# sourceMappingURL=robot.js.map