

export default function Packages(props) {
    let displayPackages = props.packages.map(eachPackage => <li>{eachPackage}</li>)

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ul>
                    {displayPackages}
                </ul>
            </div>
        </div>
    )
}