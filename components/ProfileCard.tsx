const ProfileCard = () => {
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                    <span className="sr-only">Open dropdown</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                </button>

                <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="data:image/jpeg;base64,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" alt="Bonnie image" />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                <div className="flex mt-4 md:mt-6">
                    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                    <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard