/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as EditWorkoutImport } from './routes/edit-workout'
import { Route as CreateWorkoutImport } from './routes/create-workout'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const EditWorkoutRoute = EditWorkoutImport.update({
  path: '/edit-workout',
  getParentRoute: () => rootRoute,
} as any)

const CreateWorkoutRoute = CreateWorkoutImport.update({
  path: '/create-workout',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/create-workout': {
      id: '/create-workout'
      path: '/create-workout'
      fullPath: '/create-workout'
      preLoaderRoute: typeof CreateWorkoutImport
      parentRoute: typeof rootRoute
    }
    '/edit-workout': {
      id: '/edit-workout'
      path: '/edit-workout'
      fullPath: '/edit-workout'
      preLoaderRoute: typeof EditWorkoutImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-workout': typeof CreateWorkoutRoute
  '/edit-workout': typeof EditWorkoutRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-workout': typeof CreateWorkoutRoute
  '/edit-workout': typeof EditWorkoutRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/create-workout': typeof CreateWorkoutRoute
  '/edit-workout': typeof EditWorkoutRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/create-workout' | '/edit-workout'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/create-workout' | '/edit-workout'
  id: '__root__' | '/' | '/about' | '/create-workout' | '/edit-workout'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  CreateWorkoutRoute: typeof CreateWorkoutRoute
  EditWorkoutRoute: typeof EditWorkoutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  CreateWorkoutRoute: CreateWorkoutRoute,
  EditWorkoutRoute: EditWorkoutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/create-workout",
        "/edit-workout"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/create-workout": {
      "filePath": "create-workout.tsx"
    },
    "/edit-workout": {
      "filePath": "edit-workout.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
