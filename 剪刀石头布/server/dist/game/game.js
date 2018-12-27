"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameChoice;
(function (GameChoice) {
    GameChoice[GameChoice["Scissors"] = 1] = "Scissors";
    GameChoice[GameChoice["Rock"] = 2] = "Rock";
    GameChoice[GameChoice["Paper"] = 3] = "Paper";
})(GameChoice = exports.GameChoice || (exports.GameChoice = {}));
function judge(choice1, choice2) {
    if (choice1 == choice2)
        return 0;
    if (!choice1)
        return 1;
    if (!choice2)
        return -1;
    return (choice1 - choice2 + 3) % 3 == 1 ? -1 : 1;
}
exports.judge = judge;
//# sourceMappingURL=game.js.map