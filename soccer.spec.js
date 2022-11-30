describe('Tests for Soccer', () => {

    describe('Test the getTotalPoints Method', () => {
        it('Should return correct point total', () => {
            const points = getTotalPoints('wwdl');
            expect(points).toBe(7);
            expect(getTotalPoints('dddl')).toBe(3);
        });
    });
    describe('Test the getTotalPoints Method', () => {
        it('Should return correct teams, with Points', () => {
            const team1 = {
                name: 'Sounders',
                results: 'wwwwwldl'
            }
            const team2 = {
                name: 'Galaxy',
                results: 'ldwdwlwl'
            }

            const expectedString = `Sounders: 16\nGalaxy: 11`
            const result = orderTeams(team1, team2);
            expect(result).toBe(expectedString);
        });
    });
}

);