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
    public class RoomController : ControllerBase
    {
        private IRoomService _service;

        public RoomController(IRoomService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public  IActionResult GetRooms()
        {
            var allRooms = _service.GetAllRooms();
            return Ok(allRooms);
        }

        [HttpPost("AddRoom")]
        public IActionResult AddRoom([FromBody]RoomObject room)
        {
            if (room != null)
            {
                _service.AddRoom(room);
            }

            return Ok();
        }

        [HttpPut("UpdateRoom/{id}")]
        public IActionResult UpdateRoom(string id, [FromBody]RoomObject room)
        {
            _service.UpdateRoom(id, room);
            return Ok(room);
        }

        [HttpDelete("DeleteRoom/{id}")]
        public IActionResult DeleteRoom(string id)
        {
            _service.DeleteRoom(id);
            return Ok();
        }

    }
}