export function play(player1: string, player2: string): number {
  const p1 = player1.trim().toLowerCase();
  const p2 = player2.trim().toLowerCase();

  if (!["rock", "paper", "scissors"].includes(p1)) {
    throw new Error(`Invalid move: ${player1}`);
  }

  if (!["rock", "paper", "scissors"].includes(p2)) {
    throw new Error(`Invalid move: ${player2}`);
  }

  if (p1 === p2) return 0;

  if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return 1;
  }

  return 2;
}