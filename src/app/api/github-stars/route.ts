export async function GET(req: Request) {
  // GitHub stars functionality removed
  return Response.json({ stars: 0 });
}