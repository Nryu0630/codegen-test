export default function TestProps(props: any) {
    return (
        <div>
            <h1>Test props!</h1>
            <div>{props.tip}</div>
            <div>{props.children}</div>
        </div>
    )
};

export { TestProps }