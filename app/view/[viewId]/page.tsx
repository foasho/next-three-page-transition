import { Model } from "./_components/Model";


const getViewModels = async (viewId: number) => {
  switch (viewId) {
    case 1:
      return "/models/1.gltf";
    case 2:
      return "/models/2.gltf";
    case 3:
      return "/models/3.gltf";
    default:
      return "/models/1.gltf";
  }
};

export default async function ViewPage (
  {
    params,
  }: {
    params: any
  }
) {

  const viewId = params.viewId;
  const url = await getViewModels(parseInt(viewId));

  return <Model url={url} />;
}