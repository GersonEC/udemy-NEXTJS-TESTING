import { rest } from 'msw';
import { readFakeData } from '../fakeData';
import { fakeUserReservations } from '../fakeData/userReservations';

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET /user request
  rest.get('http://localhost:3000/api/shows/:showId', async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params;
    return res(
      ctx.json({
        show: fakeShows[Number(showId)],
      })
    );
  }),
  rest.get(
    'http://localhost:3000/api/users/:userId/reservations',
    async (req, res, ctx) =>
      res(ctx.json({ userReservations: fakeUserReservations }))
  ),
];
