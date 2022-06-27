import { useState } from "react"

export const withUser = Component => {
    return (props) => {
        const [user, setUser] = useState()
        const [loading, setLoading] = useState(true)
        useState(() => {
            const timeOut = setTimeout(() => {
                setUser({ name: "Victor", age:16 })
                setLoading(false)
            }, 2000);
            return () => clearTimeout(timeOut)
        })
        return <Component user={user} loading={loading} {...props} />
    }
}