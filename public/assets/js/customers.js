$(document).ready(function () {

  $.fn.editable.defaults.ajaxOptions = {
    type: "PUT"
  }
  $('#name').editable({
    params: function (params) { //params already contain `name`, `value` and `pk`
      var data = {};
      data['id'] = params.pk;
      data[params.name] = params.value;
      return data;
    }
  })


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