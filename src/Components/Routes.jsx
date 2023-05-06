// import { Navigate } from "react-router-dom"

import { useSearchParams } from "react-router-dom"

export const Landing = () => {
  return <h2>Landing (Public: anyone can access this page)</h2>
}

export const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchHandler = (event) => {
    let search
    if (event.target.value) {
      search = {
        keyword: event.target.value,
      }
    } else {
      search = undefined
    }

    setSearchParams(search, { replace: true })
  }
  return (
    <>
      <input
        type="text"
        onChange={searchHandler}
        placeholder="...Search"
        value={searchParams.keyword}
      />
      <h2>Home (Protected: authenticated user required)</h2>
    </>
  )
}

export const Dashboard = () => {
  return <h2>Dashboard (Protected: authenticated user required)</h2>
}

export const Analytics = () => {
  return (
    <h2>
      Analytics (Protected: authenticated user with permission analyze required)
    </h2>
  )
}

export const Admin = () => {
  return <h2>Admin (Protected: authenticated user with role admin required)</h2>
}
