/**
 * 获取书刊内容的数据列表
 */
export function listPublicationContentData() {
    return [{ id: '793000000001' }];
}

/**
 * 根据书刊内容的ID，获取书刊内容数据
 */
export function getPublicationContentData(id: string) {
    const publicationContentDataList = listPublicationContentData();
    return publicationContentDataList.find((item) => item.id === id);
}
