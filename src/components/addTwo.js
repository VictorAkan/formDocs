export const addTwo = Component => {
    return (props) => {
        return <Component {...props} increment={2} />
    }
}