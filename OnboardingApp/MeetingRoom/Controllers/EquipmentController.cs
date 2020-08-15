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
    public class EquipmentController : ControllerBase
    {
        private IEquipmentService _service;

        public EquipmentController(IEquipmentService service)
        {
            this._service = service;
        }

        [HttpGet("[action]")]
        public IActionResult GetEquipment()
        {
            var allEquipment = _service.GetAllEquipment();
            return Ok(allEquipment);
        }

        [HttpPost("AddEquipment")]
        public IActionResult AddEquipment([FromBody] EquipmentObject equipment)
        {
            if (equipment != null)
            {
                _service.AddEquipment(equipment);
            }

            return Ok();
        }

        [HttpPut("UpdateEquipment/{id}")]
        public IActionResult UpdateEquipment(string id, [FromBody] EquipmentObject equipment)
        {
            _service.UpdateEquipment(id, equipment);
            return Ok(equipment);
        }

        [HttpDelete("DeleteEquipment/{id}")]
        public IActionResult DeleteEquipment(string id)
        {
            _service.DeleteEquipment(id);
            return Ok();
        }
    }
}