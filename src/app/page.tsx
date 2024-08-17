'use client'
import PostCard from './_components/PostCard'
import useFetchCollection from './_utils/useFetchCollection'
import ProfileCard from './_components/ProfileCard'
import ProfileMiniCard from './_components/ProfileMiniCard'
import SideCard from './_components/SideCard'
import StoriesCard from './_components/StoriesCard'
import AddStatusCard from './_components/AddStatusCard'

export default function Home() {
    const { data: posts, error, loaded } = useFetchCollection('posts')

    return (
        <section className="flex gap-4 p-4">
            {/* 
    Sloupec 1 */}

            <div className=" lg:w-1/4 sm:w-2/5 sm:flex sm:flex-col sm:gap-4 hidden ">
                <ProfileCard></ProfileCard>
                <SideCard header="Following">
                    <ProfileMiniCard
                        user="Martin"
                        info="Active"
                    ></ProfileMiniCard>
                    <ProfileMiniCard
                        user="Kuba"
                        info="Active 3 min ago"
                    ></ProfileMiniCard>
                </SideCard>
            </div>
            {/* 
      Soupec 2
 */}

            <div className=" lg:w-2/4 sm:w-3/5 w-full flex flex-col gap-4">
                <StoriesCard></StoriesCard>
                <AddStatusCard></AddStatusCard>

                {error ? (
                    <p>Error! Try it again.</p>
                ) : loaded ? (
                    posts && posts.length > 0 ? (
                        posts.map((post: any) => (
                            <PostCard key={post.id} data={post} />
                        ))
                    ) : (
                        <p className="w-fit m-auto">There is no post.</p>
                    )
                ) : (
                    <p className="w-fit m-auto">Loading. Please wait...</p>
                )}
            </div>
            {/* 
        Sloupec 3
 */}

            <div className=" hidden lg:w-1/4 lg:flex lg:flex-col lg:gap-4  ">
                <SideCard header="Suggestions for you">
                    <ProfileMiniCard
                        user="Jindra"
                        info="Followed by @jskdd"
                    ></ProfileMiniCard>
                    <ProfileMiniCard
                        user="Jindra"
                        info="Followed by @jskdd"
                    ></ProfileMiniCard>
                    <ProfileMiniCard
                        user="Jindra"
                        info="Followed by @jskdd"
                    ></ProfileMiniCard>
                </SideCard>
            </div>
        </section>
    )
}
