const cubes = [
    {
        id: 1,
        name: 'Cube',
        description: 'Yes this is a cube',
        difficultyLevel: 3,
    }
];

exports.getAll = (search, from, to) => {
    let result = cubes.slice();

    if (search) {
       result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(from){
        result = result.filter(cube =>cube.difficultyLevel >= Number(from));
    }
    
    if(to){
        result = result.filter(cube =>cube.difficultyLevel <= Number(from));
    }
};

exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);

exports.create = (cubeData) => {
    cubes.push(cubeData);
} 