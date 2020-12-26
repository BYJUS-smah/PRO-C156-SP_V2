
AFRAME.registerComponent("diver-rotation-reader", {
  
  update: function() {
    // Key Down Event
    window.addEventListener("keydown", e => {
      const diverRotation = this.el.getAttribute("rotation");
      console.log(this.el.body.position);
      const body = this.el.body;
      
      if (e.key === "ArrowRight") {
        if (diverRotation.x >= -35 && diverRotation.x <= 30) {
          body.angularVelocity.set(0, 0, -0.2);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowLeft") {
        if (diverRotation.x <= 35 && diverRotation.x >= -30) {
          body.angularVelocity.set(0, 0, 0.2);
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowUp") {
        if (diverRotation.z > -50 && diverRotation.z <= -10) {
          body.angularVelocity.set(0.2, 0, 0);          
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
      if (e.key === "ArrowDown") {
        if (diverRotation.z <= -10 && diverRotation.z >= -50) {
          body.angularVelocity.set(-0.2, 0, 0);          
        } else {
          body.angularVelocity.set(0, 0, 0);
        }
      }
    });

    // Key Up Event
    window.addEventListener("keyup", e => {
      const body = this.el.body;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        body.angularVelocity.set(0, 0, 0);
      }
      if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        body.angularVelocity.set(0, 0, 0);
      }
    });
  },
  
  tick: function() {
    this.setVelocity(this.el.body);
  },
  setVelocity: function(body) {
    
    if (body !== undefined) {
      // Set velocity to 0.1 to float in the air
      body.velocity.set(0.1, 0.1, 0.1);

      // Initial position of driver
      const initPosition = body.initPosition;
      body.position.set(initPosition.x, initPosition.y, initPosition.z);
    }
  }
});

