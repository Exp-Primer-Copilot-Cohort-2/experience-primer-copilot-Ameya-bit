function skillmembers() {
    let members = [
        {name: 'John', age: 25, skills: ['HTML', 'CSS', 'JS']},
        {name: 'Jane', age: 22, skills: ['React', 'Node', 'JS']}
    ];
    members.map(member => {
        console.log(member.skills);
    });
}