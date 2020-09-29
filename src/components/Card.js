import React from 'react'

const Card = ( {image} ) => {

    const tags =image.tags.split(',');

    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={image.webformatURL} alt="" className="w-full" />
                <div className="px-6 py-4">
                    <div className="font-bold text-purple-500 text-xl mb-2">
                        {image.user} 
                    </div>
                    <ul>
                            <li>
                                <strong>View: {image.views}</strong>
                            </li>
                            <li>
                                <strong>Download: {image.downloads}</strong>
                            </li>
                            <li>
                                <strong>Like: {image.likes}</strong>
                            </li>
                    </ul>
                </div>
                    <div className="px-6 py-4" >
                        {tags.map((tag, index) => (
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2" key={index}>
                                #{tag} 
                            </span>
                        ))}
                </div>
            </div>
        </div>
    )
};

export default Card;
