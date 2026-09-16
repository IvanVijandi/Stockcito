using Domain.Common;

namespace Domain.ValueObjects;

public sealed class Quantity : ValueObject
{
    public int Value { get; }

    public Quantity(int value)
    {
        if (value < 0)
            throw new ArgumentException("Quantity cannot be negative.", nameof(value));

        Value = value;
    }

    public static Quantity Zero => new(0);

    public Quantity Add(int units)
    {
        if (units <= 0)
            throw new ArgumentException("Units to add must be positive.", nameof(units));

        return new Quantity(Value + units);
    }

    public Quantity Subtract(int units)
    {
        if (units <= 0)
            throw new ArgumentException("Units to subtract must be positive.", nameof(units));

        if (units > Value)
            throw new InvalidOperationException($"Cannot subtract {units} units from a stock of {Value}.");

        return new Quantity(Value - units);
    }

    protected override IEnumerable<object?> GetEqualityComponents()
    {
        yield return Value;
    }

    public override string ToString() => Value.ToString();
}

