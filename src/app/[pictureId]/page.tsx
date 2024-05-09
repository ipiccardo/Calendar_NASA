import { Suspense } from "react";
import api from "../../../api";
import ImageRender from "../components/ui/ImageRender";

export default async function Page({ params }: { params: { pictureId: string } }) {

    const singlePic = await api.fetch(params.pictureId)

    return (
        <Suspense fallback={<h1>LOADING...</h1>} >
            <ImageRender singlePic={singlePic} />
        </Suspense>
    );
}
