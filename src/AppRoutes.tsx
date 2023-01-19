import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Link,
  RouteObject,
} from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import DefaultLayout from 'layouts/DefaultLayout'

import ExamplePage from 'routes/example'
import AnotherExamplePage from 'routes/another-example'

export const pagePath = {
  index: '/',
  example: '/example',
  anotherExample: '/another-example',
}

type PagePathName = keyof typeof pagePath

const allPageRoutes: Record<PagePathName, RouteObject> = {
  index: {
    index: true,
    element: <Navigate to="/example" />,
  },
  example: {
    path: pagePath.example,
    element: <ExamplePage />,
  },
  anotherExample: {
    path: pagePath.anotherExample,
    element: <AnotherExamplePage />,
  },
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootElement />,
    errorElement: (
      <>
        <h1>Page Not Found</h1>
        <Link to="/">Back</Link>
      </>
    ),
    children: Object.keys(allPageRoutes).map(
      (name) => allPageRoutes[name as PagePathName]
    ),
  },
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes

function RootElement() {
  return (
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <DefaultLayout />
    </QueryParamProvider>
  )
}
