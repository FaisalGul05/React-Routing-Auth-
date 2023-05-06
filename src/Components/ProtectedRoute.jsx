import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = ({ isAllowed, children, redirectPath = "/landing" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}

export default ProtectedRoute

// import { Navigate } from "react-router-dom"

// const ProtectedRoute = ({ user, children, redirectPath = "/landing" }) => {
//   if (!user) {
//     return <Navigate to={redirectPath} replace />
//   }

//   return children
// }

// export default ProtectedRoute
