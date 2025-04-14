import { play } from "./rock-paper-scissors";

describe("Rock Paper Scissors Game", () => {
    test.each([
        ["rock", "scissors", 1],
        ["scissors", "paper", 1],
        ["scissors", "rock", 2],
        ["paper", "scissors", 2],
        ["rock", "rock", 0],
        ["paper", "paper", 0],
        ["  Rock  ", "PAPER", 2],
        ["SCISSORS", " paper ", 1],
    ])("play('%s', '%s') returns %i", (p1, p2, expected) => {
        expect(play(p1, p2)).toBe(expected);
    });

    test.each([
        ["fire", "rock", "Invalid move: fire"],
        ["rock", "laser", "Invalid move: laser"],
        ["", "rock", "Invalid move: "],
        ["rock", "", "Invalid move: "],
    ])("invalid input throws: play('%s', '%s')", (p1, p2, expectedError) => {
        expect(() => play(p1, p2)).toThrow(expectedError);
    });
});
