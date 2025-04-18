

const ProductAbout = () => {
    return (
        <div className="bg-white text-black py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img
                                className="w-full h-full object-cover"
                                src="https://cdn.pixabay.com/photo/2020/05/22/17/53/mockup-5206355_960_720.jpg"
                                alt="Product Image"
                            />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full sm:bg-secondaryBg lg:bg-primaryBg text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                                    Add to Cart
                                </button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full sm:bg-primaryBg  lg:bg-secondaryBg text-white dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            Product Name
                        </h2>
                        <p className="text-black text-sm mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante
                            justo. Integer euismod libero id mauris malesuada tincidunt.
                        </p>
                        <div className="flex mb-4">
                            <div className="mr-4">
                                <span className="font-bold text-black">
                                    Price:
                                </span>
                                <span className="text-black">$29.99</span>
                            </div>
                            <div>
                                <span className="font-bold text-black">
                                    Availability:
                                </span>
                                <span className="bg-green-600">In Stock</span>
                                <span className="bg-red-600">out of Stock</span>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-black">
                                Select Color:
                            </span>
                            <div className="flex items-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2" />
                                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2" />
                                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2" />
                                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-black">
                                Select Size:
                            </span>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                    S
                                </button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                    M
                                </button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                    L
                                </button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                    XL
                                </button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">
                                    XXL
                                </button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-black">
                                Product Description:
                            </span>
                            <p className="text-black text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                Vivamus commodo nulla ut lorem rhoncus aliquet. Duis dapibus augue
                                vel ipsum pretium, et venenatis sem blandit. Quisque ut erat vitae
                                nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum
                                lacinia, non sagittis mauris blandit. Morbi fermentum libero vel
                                nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductAbout