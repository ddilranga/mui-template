// src/mocks/handlers.js
import { rest } from "msw";

const baseURL = (path: string | URL) => {
  return new URL(`backend/${path}`, "http://localhost:3000").toString();
};

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJmaXJzdF9uYW1lIjoiSm9obiIsImxhc3RfbmFtZSI6IkRvZSJ9LCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTY3MDA4Njc4OX0.r67XbgSWvAR7aSqkaNkgEzaQb1T-qqS6UTW22WDPDaE";

export const handlers = [
  rest.post(baseURL("login"), (req, res, ctx) => {
    return res(
      ctx.delay(2000),
      ctx.json({
        user: {
          first_name: "Test",
          last_name: "User",
        },
        token,
      })
    );
  }),

  rest.get(baseURL("example"), (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<{ response: { example: string } }>({
        response: {
          example: "response from server",
        },
      })
    );
  }),

  rest.get(baseURL("user"), (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("token");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "demo",
      })
    );
  }),
];
