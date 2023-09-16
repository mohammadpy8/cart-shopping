const useShortTitle = (title) => {
    const shortTitle = title.split(" ");
    const setTitle = `${shortTitle[0]} ${shortTitle[1]}`;
    return setTitle;
};

export default useShortTitle;