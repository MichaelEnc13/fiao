const init_table = (y = 400) => {
    $('#table').DataTable({
        destroy: true,
        scrollY: y,
        order: [0, 'DESC']

    });
    $('.adminTable').DataTable({
        destroy: true,
        scrollY: 150,
        order: [0, 'DESC']

    });
}
init_table()