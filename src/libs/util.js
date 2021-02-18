const displayConfig = (config) => {
    const {bed, beth, maxPeople, room} = config;
    return `최대 인원 ${maxPeople}명 · 침실 ${room}개 · 침대 ${bed}개 · 욕실 ${beth}개`
}

export {displayConfig}