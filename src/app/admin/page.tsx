'use client'
import React from 'react'
import useFetchCollection from '../_utils/useFetchCollection'
import Link from 'next/link'
import { deleteDoc, doc } from 'firebase/firestore'
import useDb from '../_utils/useDb'

const Admin = () => {
    const { data: posts, error, loaded } = useFetchCollection('posts')
    const { db } = useDb()

    const deletePost = (id: any) => {
        console.log('deleted')

        deleteDoc(doc(db, 'posts', id))
    }

    return (
        <section className="flex flex-col items-center gap-4 p-4">
            <h1 className="mx-auto">Admin page</h1>

            {error ? (
                <p>Error! Try it again.</p>
            ) : loaded ? (
                posts && posts.length > 0 ? (
                    posts.map((post: any, i: number) => (
                        <div
                            key={i}
                            className=" w-full md:w-1/2 p-4 card rounded-2xl flex flex-col gap-4"
                        >
                            <Link href="/" className="flex gap-2 group w-fit">
                                <div className="bg-lightGray w-10 h-10 rounded-xl"></div>
                                <div>
                                    <p className="font-bold group-hover:text-mezoGray duration-200">
                                        Jindra Habartaf
                                    </p>

                                    <p className=" text-lightGray text-sm">
                                        3 min ago
                                    </p>
                                </div>
                            </Link>
                            <div>
                                <p>{post.text}</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <div
                                    onClick={() => deletePost(post.id)}
                                    className="px-4 py-2 w-fit rounded-lg bg-lightGray bg-opacity-20 duration-200 hover:cursor-pointer hover:bg-opacity-40"
                                >
                                    Delete post
                                </div>
                                <div className="flex gap-2 justify-end">
                                    {post.likes && post.likes > 0 ? (
                                        <p className=" text-lightGray text-sm">
                                            {post.likes} Likes
                                        </p>
                                    ) : (
                                        <p className=" text-lightGray text-sm">
                                            0 Likes
                                        </p>
                                    )}

                                    {post.comments &&
                                    post.comments.length > 0 ? (
                                        post.comments.length != 1 ? (
                                            <p className=" text-lightGray text-sm">
                                                {post.comments.length} Comments
                                            </p>
                                        ) : (
                                            <p className=" text-lightGray text-sm">
                                                {post.comments.length} Comment
                                            </p>
                                        )
                                    ) : (
                                        <p className=" text-lightGray text-sm">
                                            0 Comments
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="w-fit m-auto">There is no post.</p>
                )
            ) : (
                <p className="w-fit m-auto">Loading. Please wait...</p>
            )}
        </section>
    )
}

export default Admin
