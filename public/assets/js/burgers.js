$(document).ready(function () {

  $.get('/api/customers')
    .done(customers => {
      customers.forEach(customer => {
        let devourItem = $('<a>')
          .addClass('dropdown-item devour-btn')
          .attr('href', '#')
          .data('customer-id', customer.id)
          .text(customer.name)
        $('.customer-options').append(devourItem)
      });
    })
    .fail(error => {
      throw error
    })

  $('#newBurgerBtn').on('click', event => {
    event.preventDefault()
    let data = {
      name: $('#nameInput').val().trim()
    }
    $.post('/api/burgers', data)
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })

  $(document.body).on('click', '.devour-btn', function () {
    let customerId = $(this).data('customer-id')
    let burgerId = $(this).parent().data('burger-id')
    let data = {
      id: burgerId,
      devoured: true,
      CustomerId: customerId
    }
    $.ajax({
        url: `/api/burgers/`,
        method: 'PUT',
        data: data
      })
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })

  $(document.body).on('click', '.cleanup-btn', function () {
    let burgerId = $(this).data('id')
    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: 'DELETE'
      })
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })
})