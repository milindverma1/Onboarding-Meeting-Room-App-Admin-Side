using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MeetingRoom.Data;

namespace MeetingRoom.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BookingController : ControllerBase
    {
        private IBookingService _service;

        public BookingController(IBookingService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetBookings()
        {
            var allBookings = _service.GetAllBookings();
            return Ok(allBookings);
        }

        [HttpPost("AddBooking")]
        public IActionResult AddBooking([FromBody] BookingObject booking)
        {
            if (booking != null)
            {
                _service.AddBooking(booking);
            }

            return Ok();
        }

        [HttpPut("UpdateBooking/{id}")]
        public IActionResult UpdateBooking(string id, [FromBody] BookingObject booking)
        {
            _service.UpdateBooking(id, booking);
            return Ok(booking);
        }

        [HttpDelete("DeleteBooking/{id}")]
        public IActionResult DeleteBooking(string id)
        {
            _service.DeleteBooking(id);
            return Ok();
        }
    }
}