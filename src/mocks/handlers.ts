// src/mocks/handlers.js
import { nanoid } from "@reduxjs/toolkit";
import { rest } from "msw";
import { AuthState } from "views/auth/store";

const baseURL = (path: string | URL) => {
  return new URL(`backend/${path}`, "http://localhost:3000").toString();
};

const token = nanoid();

export const handlers = [
  rest.post(baseURL("login"), (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("token", token);

    return res(
      ctx.delay(400),
      ctx.json<AuthState>({
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
