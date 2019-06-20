$(document).ready(function () {

  
  $('#newCustomerBtn').on('click', event => {
    event.preventDefault()
    let data = {
      name: $('#nameInput').val().trim()
    }
    $.post('/api/customers', data)
      .done(() => {
        location.reload()
      })
      .fail(error => {
        throw error
      })
  })


  $(document.body).on('click', '.delete-btn', function () {
    let customerId = $(this).data('id')
    $.ajax({
        url: `/api/customers/${customerId}`,
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