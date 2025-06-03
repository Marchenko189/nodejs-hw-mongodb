const parseContactType = (contactType) => {
    if (typeof contactType !== 'string') return undefined;

    const normalizedType = contactType.toLowerCase();
    const validTypes = ['work', 'home', 'personal'];
  
    return validTypes.includes(normalizedType) ? normalizedType : undefined;
  };

const parseIsFavourite = (isFavourite) => {
    if (typeof isFavourite === 'boolean') return isFavourite;

    if (typeof isFavourite === 'string') {
        if (isFavourite.toLowerCase() === 'true') return true;
        if (isFavourite.toLowerCase() === 'false') return false;
    }

    return undefined;
};
  
export const parseFilterParams = (query) => {
    const { contactType, isFavourite } = query;

    const parsedContactType = parseContactType(contactType);
    const parsedIsFavourite = parseIsFavourite(isFavourite);

    return {
        contactType: parsedContactType,
        isFavourite: parsedIsFavourite
    };
};