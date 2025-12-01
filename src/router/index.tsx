import { lazy } from "react";
import { buildRoutes, RouteConfig } from "./utils";
import { createBrowserRouter } from "react-router";
import ErrorBoundary from "@/components/ErrorBoundary";

const routeConfig: RouteConfig[] = [
  {
    ErrorBoundary: ErrorBoundary,
    children: [
      {
        path: "/login",
        element: lazy(() => import("@/views/login"))
      },
      {
        // 应用基础布局
        path: "/",
        element: lazy(() => import("@/layouts/EditView")),
        middlewares: [
          // 管理员登录验证中间件
          lazy(() => import("@/middlewares/AuthMiddleware"))
        ],
        children: [
          {
            path: "/",
            element: lazy(() => import("@/views/modelEdit"))
          }
        ]
      }
    ]
  }
];

export const routes = buildRoutes(routeConfig);

export const router = createBrowserRouter(routes);
