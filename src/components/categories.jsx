import '../styles/categories.css'
const Categories = () => {
    let categories = [
        { link: "All" },
        { link: "Mixes" },
        { link: "Music" },
        { link: "Songs" },
        { link: "Live" },
        { link: "Gaming" },
        { link: "Food" },
        { link: "Lessons" },
        { link: "Recently Uploaded" },
        { link: "New to you" }
    ]
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((data) => {
                        return (
                            <li><a href="">{data.link}</a></li>
                        )
                    })
                }
            </ul>

        </div>
    );
}

export default Categories;