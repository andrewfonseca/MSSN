var Skydiver = function(position, velocity, acceleration) {

	this.position = position
	this.velocity = velocity
	this.acceleration = acceleration
	this.diameter = 20
	this.mass = 1
}

Skydiver.prototype.draw = function() {

	ellipse(this.position.x, this.position.y * -1, this.diameter, this.diameter)
}

/**
 * Calculates the new position based on the current acceleration and velocity
 * based on real world forces
 * Input:
 * 	delta << Time difference between frames
 */
Skydiver.prototype.move = function(delta) {

	this.velocity.add(p5.Vector.mult(this.acceleration, delta / 1000))
	this.position.add(p5.Vector.mult(this.velocity, delta / 1000))

	if (this.position.y - this.diameter / 2 <= 0) {
		this.position.y = this.diameter / 2
		this.velocity.y = 0
	}

	this.acceleration.mult(0)
}

Skydiver.prototype.verbose = function() {

	return (
		`Position ${this.position.x.toFixed(0)}, ${this.position.y.toFixed(0)} [ m ]\n` +
		`Velocity ${this.velocity.x.toFixed(0)}, ${this.velocity.y.toFixed(0) * -1} [ m/s ]\n`
	)
}
